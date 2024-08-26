
import { test, expect } from "@playwright/experimental-ct-react";
import App1687 from "../example/App1687.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1687 />);
  await expect(component).toContainText("Learn React");
});
