
import { test, expect } from "@playwright/experimental-ct-react";
import App1381 from "../example/App1381.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1381 />);
  await expect(component).toContainText("Learn React");
});
