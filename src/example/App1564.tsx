
import { test, expect } from "@playwright/experimental-ct-react";
import App1564 from "./App1564.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1564 />);
  await expect(component).toContainText("Learn React");
});
