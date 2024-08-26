
import { test, expect } from "@playwright/experimental-ct-react";
import App1737 from "../example/App1737.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1737 />);
  await expect(component).toContainText("Learn React");
});
