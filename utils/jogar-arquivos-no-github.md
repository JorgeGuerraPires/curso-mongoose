---
description: >-
  Por mais que seja óbvio, eu gosto de deixar anotado o passo a passo, para
  aqueles dias de cansaço onde não se lembra nem o CPF
---

# Jogar arquivos no GitHub

## Jogar em um braço do repositório

```
git init //
git add .
git commit -m "first commit"
git branch -M nomedobraço 
git remote add origin https://github.com/Teranostico/teste.git
git push -u origin nomedobraço "ou" git push origin nomedobraço

```

{% hint style="info" %}
O repositório precisa existir.&#x20;
{% endhint %}

### Talvez queira saber

#### Mudando o repositório já existente (o link)

Do seu terminal, eu uso VS Code. Isso vai mudar o link do seu repositório.&#x20;

```

git remote set-url origin [no repo link]
```

