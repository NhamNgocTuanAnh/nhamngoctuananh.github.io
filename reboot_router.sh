#!/usr/bin/expect -f
set timeout 10
spawn telnet 192.168.100.1
expect "Username:"
send "root\r"
expect "Password:"
send "3zMMSODiZycrGa\r"
expect "WAP>"
send "sys reboot\r"
expect {
    "ERROR" {
        send "diagnose\r"
        expect "SU_DIAG>"
        send "reboot\r"
    }
}
expect eof
