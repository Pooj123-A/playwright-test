
import { test, expect } from "@playwright/experimental-ct-react";
import App1950 from "../example/App1950.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1950 />);
  await expect(component).toContainText("Learn React");
});
