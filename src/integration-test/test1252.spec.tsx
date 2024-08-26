
import { test, expect } from "@playwright/experimental-ct-react";
import App1252 from "../example/App1252.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1252 />);
  await expect(component).toContainText("Learn React");
});
