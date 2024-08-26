
import { test, expect } from "@playwright/experimental-ct-react";
import App1433 from "../example/App1433.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1433 />);
  await expect(component).toContainText("Learn React");
});
