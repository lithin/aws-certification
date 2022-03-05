resource "aws_iam_role" "sls_deploys" {
  name = "sls-deploys"
  assume_role_policy = data.aws_iam_policy_document.serverless_deployments.json
}

locals {
  app_name       = "thrive-slack-app"
  aws_account_id = "907192535403"
}

# Note-AD: Following https://serverlessfirst.com/create-iam-deployer-roles-serverless-app/
data "aws_iam_policy_document" "serverless_deployments" {
  statement {
    effect = "Allow"
    actions = [
      "cloudformation:CreateChangeSet",
      "cloudformation:CreateStack",
      "cloudformation:DeleteChangeSet",
      "cloudformation:DeleteStack",
      "cloudformation:DescribeChangeSet",
      "cloudformation:DescribeStackEvents",
      "cloudformation:DescribeStackResource",
      "cloudformation:DescribeStackResources",
      "cloudformation:DescribeStacks",
      "cloudformation:ExecuteChangeSet",
      "cloudformation:ListStackResources",
      "cloudformation:SetStackPolicy",
      "cloudformation:UpdateStack",
      "cloudformation:UpdateTerminationProtection",
      "cloudformation:GetTemplate",
    ]
    resources = [
      "arn:aws:cloudformation:ca-central-1:${local.aws_account_id}:stack/${local.app_name}-*",
    ]
  }

  statement {
    effect = "Allow"
    actions = [
      "cloudformation:ValidateTemplate",
    ]
    resources = [
      "*",
    ]
  }

  statement {
    effect = "Allow"
    actions = [
      "lambda:Get*",
      "lambda:List*",
    ]
    resources = [
      "*",
    ]
  }

  statement {
    effect = "Allow"
    actions = [
      "s3:CreateBucket",
      "s3:DeleteBucket",
      "s3:ListBucket",
      "s3:PutObject",
      "s3:GetObject",
      "s3:DeleteObject",
      "s3:GetBucketPolicy",
      "s3:PutBucketPolicy",
      "s3:DeleteBucketPolicy",
      "s3:PutBucketAcl",
      "s3:GetEncryptionConfiguration",
      "s3:PutEncryptionConfiguration",
    ]
    resources = [
      "arn:aws:s3:::${local.app_name}-*",
    ]
  }

  statement {
    effect = "Allow"
    actions = [
      "s3:List*",
    ]
    resources = [
      "*",
    ]
  }

  statement {
    effect = "Allow"
    actions = [
      "iam:AttachRolePolicy",
      "iam:CreateRole",
      "iam:DeleteRole",
      "iam:DeleteRolePolicy",
      "iam:DetachRolePolicy",
      "iam:GetRole",
      "iam:PassRole",
      "iam:PutRolePolicy",
    ]
    resources = [
      "arn:aws:iam::${local.aws_account_id}:role/${local.app_name}*-lambdaRole",
    ]
  }

  # for slackbot deployments
  statement {
    effect = "Allow"
    actions = [
      "ssm:GetParameter",
    ]
    resources = [
      data.aws_ssm_parameter.opsgenie_api_key.arn,
      data.aws_ssm_parameter.slack_signature.arn,
      data.aws_ssm_parameter.slack_app_id.arn,
    ]
  }
}

data "aws_ssm_parameter" "opsgenie_api_key" {
  name = "/admin/opsgenie-api-key"
}

data "aws_ssm_parameter" "slack_signature" {
  name = "/admin/slack-thrive-signature"
}

data "aws_ssm_parameter" "slack_app_id" {
  name = "/admin/slack-app-id"
}