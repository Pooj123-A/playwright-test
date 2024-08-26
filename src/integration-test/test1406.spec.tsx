
import { test, expect } from "@playwright/experimental-ct-react";
import App1406 from "../example/App1406.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1406 />);
  await expect(component).toContainText("Learn React");
});
