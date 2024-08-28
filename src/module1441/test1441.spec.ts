
import { test, expect } from "@playwright/experimental-ct-react";
import App1441 from "./App1441.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1441 />);
  await expect(component).toContainText("Learn React");
});
