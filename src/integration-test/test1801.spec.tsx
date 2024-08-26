
import { test, expect } from "@playwright/experimental-ct-react";
import App1801 from "../example/App1801.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1801 />);
  await expect(component).toContainText("Learn React");
});
