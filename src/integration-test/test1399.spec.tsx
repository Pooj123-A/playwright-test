
import { test, expect } from "@playwright/experimental-ct-react";
import App1399 from "../example/App1399.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1399 />);
  await expect(component).toContainText("Learn React");
});
