
import { test, expect } from "@playwright/experimental-ct-react";
import App160 from "../example/App160.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App160 />);
  await expect(component).toContainText("Learn React");
});
