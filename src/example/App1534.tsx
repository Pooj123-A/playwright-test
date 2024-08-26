
import { test, expect } from "@playwright/experimental-ct-react";
import App1534 from "./App1534.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1534 />);
  await expect(component).toContainText("Learn React");
});
