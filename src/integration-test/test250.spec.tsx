
import { test, expect } from "@playwright/experimental-ct-react";
import App250 from "../example/App250.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App250 />);
  await expect(component).toContainText("Learn React");
});
