resource = "aws_instance" "aws-linux-terraform"{
 ami = "ami-02b983f0e2343"
 count = 1
 key_name= "terraform"
 instance_type = "t2.mirco"
 security_groups = ["launch-wizard-4","launch-wizard-6"]
 tags = {
    "name"="terraform_instance" 
        }
}
