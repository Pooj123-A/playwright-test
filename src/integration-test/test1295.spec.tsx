
import { test, expect } from "@playwright/experimental-ct-react";
import App1295 from "../example/App1295.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1295 />);
  await expect(component).toContainText("Learn React");
});
