
import { test, expect } from "@playwright/experimental-ct-react";
import App2221 from "../example/App2221.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2221 />);
  await expect(component).toContainText("Learn React");
});
