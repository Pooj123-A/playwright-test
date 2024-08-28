
import { test, expect } from "@playwright/experimental-ct-react";
import App1281 from "./App1281.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1281 />);
  await expect(component).toContainText("Learn React");
});
