
import { test, expect } from "@playwright/experimental-ct-react";
import App1393 from "./App1393.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1393 />);
  await expect(component).toContainText("Learn React");
});
