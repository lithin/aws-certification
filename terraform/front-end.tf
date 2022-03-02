resource "aws_cloudfront_distribution" "front_end" {
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
    domain_name = aws_s3_bucket.front_end.bucket_regional_domain_name

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.default
    }
  }

  default_cache_behavior {
    target_origin_id = "frontend"
  }
}


# s3

resource "aws_s3_bucket" "front_end" {
  bucket = "anna-aws-certification-front-end"
  acl    = "private"

  tags = {
    group = "Frontend"
  }
}