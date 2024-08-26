
import { test, expect } from "@playwright/experimental-ct-react";
import App1840 from "../example/App1840.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1840 />);
  await expect(component).toContainText("Learn React");
});
