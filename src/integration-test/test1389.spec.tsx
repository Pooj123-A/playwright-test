
import { test, expect } from "@playwright/experimental-ct-react";
import App1389 from "../example/App1389.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1389 />);
  await expect(component).toContainText("Learn React");
});
