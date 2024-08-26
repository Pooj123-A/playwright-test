
import { test, expect } from "@playwright/experimental-ct-react";
import App1900 from "../example/App1900.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1900 />);
  await expect(component).toContainText("Learn React");
});
