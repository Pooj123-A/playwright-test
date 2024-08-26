
import { test, expect } from "@playwright/experimental-ct-react";
import App1478 from "../example/App1478.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1478 />);
  await expect(component).toContainText("Learn React");
});
