Got star trek sounds like this:
```
(1..75).to_a.each do |x|
  system "wget http://www.trekcore.com/audio/computer/computerbeep_#{x}.mp3"
end
```
