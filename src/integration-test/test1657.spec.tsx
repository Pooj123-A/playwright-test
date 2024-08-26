
import { test, expect } from "@playwright/experimental-ct-react";
import App1657 from "../example/App1657.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1657 />);
  await expect(component).toContainText("Learn React");
});
