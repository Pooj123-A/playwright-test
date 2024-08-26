
import { test, expect } from "@playwright/experimental-ct-react";
import App1213 from "../example/App1213.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1213 />);
  await expect(component).toContainText("Learn React");
});
