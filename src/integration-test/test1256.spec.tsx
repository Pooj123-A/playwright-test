
import { test, expect } from "@playwright/experimental-ct-react";
import App1256 from "../example/App1256.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1256 />);
  await expect(component).toContainText("Learn React");
});
