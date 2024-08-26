
import { test, expect } from "@playwright/experimental-ct-react";
import App1430 from "../example/App1430.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1430 />);
  await expect(component).toContainText("Learn React");
});
