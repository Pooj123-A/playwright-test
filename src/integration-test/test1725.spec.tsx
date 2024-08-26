
import { test, expect } from "@playwright/experimental-ct-react";
import App1725 from "../example/App1725.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1725 />);
  await expect(component).toContainText("Learn React");
});
