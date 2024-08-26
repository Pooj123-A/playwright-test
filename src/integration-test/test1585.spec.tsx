
import { test, expect } from "@playwright/experimental-ct-react";
import App1585 from "../example/App1585.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1585 />);
  await expect(component).toContainText("Learn React");
});
