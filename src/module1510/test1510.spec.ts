
import { test, expect } from "@playwright/experimental-ct-react";
import App1510 from "./App1510.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1510 />);
  await expect(component).toContainText("Learn React");
});
