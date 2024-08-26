
import { test, expect } from "@playwright/experimental-ct-react";
import App1806 from "../example/App1806.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1806 />);
  await expect(component).toContainText("Learn React");
});
