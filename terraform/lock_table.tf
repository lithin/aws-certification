resource "aws_dynamodb_table" "lock_table" {
  name           = "tf-lock-table"
  billing_mode   = "PROVISIONED"
  read_capacity  = 5
  write_capacity = 5
  hash_key       = "LockID"

  attribute {
    name = "LockID"
    type = "S"
  }
}

resource "aws_ssm_parameter" "locks_table_arn" {
  name  = "tf/tf-locks-table-arn"
  type  = "String"
  value = aws_dynamodb_table.lock_table.arn
}