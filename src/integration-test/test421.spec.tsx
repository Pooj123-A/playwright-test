
import { test, expect } from "@playwright/experimental-ct-react";
import App421 from "../example/App421.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App421 />);
  await expect(component).toContainText("Learn React");
});
