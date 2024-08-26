
import { test, expect } from "@playwright/experimental-ct-react";
import App2666 from "../example/App2666.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2666 />);
  await expect(component).toContainText("Learn React");
});
