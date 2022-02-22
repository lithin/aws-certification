terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.27"
    }
  }

  required_version = ">= 0.14.9"

  # backend "s3" {
  #   encrypt = true
  #   bucket = "tf-state-s3"
  #   dynamodb_table = "tf-lock-table"
  #   key = "terraform.tfstate"
  #   region = "ca-central-1"
  # }
}

provider "aws" {
  region  = var.region
}