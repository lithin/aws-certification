resource "aws_cloudfront_distribution" "front_end_2" {
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  price_class         = "PriceClass_100"

  viewer_certificate {
    cloudfront_default_certificate = true
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  origin {
    # https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origin.html

    origin_id   = "frontend" # must be unique within distribution
    domain_name = aws_s3_bucket.front_end_2.bucket_regional_domain_name

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.default_2.cloudfront_access_identity_path
    }
  }

  default_cache_behavior {
    target_origin_id = "frontend"

    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "allow-all"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }
}

resource "aws_cloudfront_origin_access_identity" "default_2" {}


# s3

resource "aws_s3_bucket" "front_end_2" {
  bucket = "anna-aws-certification-front-end-2"
  acl    = "public-read"

  cors_rule {
    allowed_headers = ["Authorization", "Content-Length"]
    allowed_methods = ["GET", "POST"]
    allowed_origins = ["https://cloudfront.net"]
    max_age_seconds = 3000
  }

  website {
    index_document = "index.html"
  }

  tags = {
    group = "Frontend"
  }
}

resource "aws_s3_bucket_policy" "front_end_2" {
  bucket = aws_s3_bucket.front_end_2.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource = [
          aws_s3_bucket.front_end_2.arn,
          "${aws_s3_bucket.front_end_2.arn}/*",
        ]
      },
    ]
  })
}