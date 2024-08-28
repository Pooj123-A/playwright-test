
import { test, expect } from "@playwright/experimental-ct-react";
import App1704 from "./App1704.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1704 />);
  await expect(component).toContainText("Learn React");
});
