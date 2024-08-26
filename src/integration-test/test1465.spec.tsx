
import { test, expect } from "@playwright/experimental-ct-react";
import App1465 from "../example/App1465.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1465 />);
  await expect(component).toContainText("Learn React");
});
