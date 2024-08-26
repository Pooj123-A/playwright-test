
import { test, expect } from "@playwright/experimental-ct-react";
import App1278 from "../example/App1278.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1278 />);
  await expect(component).toContainText("Learn React");
});
