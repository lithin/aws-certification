terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.27"
    }
  }

  required_version = ">= 0.14.9"

  backend "s3" {
    encrypt = true
    bucket = aws_s3_bucket.remote_state.name
    dynamodb_table = aws_dynamodb_table.lock_table.name
    key = "terraform.tfstate"
    region = "ca-central-1"
  }
}

provider "aws" {
  region  = var.region
}