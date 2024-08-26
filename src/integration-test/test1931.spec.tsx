
import { test, expect } from "@playwright/experimental-ct-react";
import App1931 from "../example/App1931.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1931 />);
  await expect(component).toContainText("Learn React");
});
