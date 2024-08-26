
import { test, expect } from "@playwright/experimental-ct-react";
import App638 from "../example/App638.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App638 />);
  await expect(component).toContainText("Learn React");
});
