
import { test, expect } from "@playwright/experimental-ct-react";
import App1734 from "../example/App1734.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1734 />);
  await expect(component).toContainText("Learn React");
});
