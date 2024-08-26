
import { test, expect } from "@playwright/experimental-ct-react";
import App1499 from "../example/App1499.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1499 />);
  await expect(component).toContainText("Learn React");
});
