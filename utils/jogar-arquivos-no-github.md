---
description: >-
  Por mais que seja óbvio, eu gosto de deixar anotado o passo a passo, para
  aqueles dias de cansaço onde não se lembra nem o CPF
---

# Jogar arquivos no GitHub

## Jogar em um braço do repositório

```text
git init
git add README.md //pode pular
git commit -m "first commit"
git branch -M nomedobraço 
git remote add origin https://github.com/Teranostico/teste.git
git push -u origin nomedobraço / git push origin nomedobraço

```

{% hint style="info" %}
O repositório precisa existir. 
{% endhint %}

