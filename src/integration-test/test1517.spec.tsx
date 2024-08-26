
import { test, expect } from "@playwright/experimental-ct-react";
import App1517 from "../example/App1517.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1517 />);
  await expect(component).toContainText("Learn React");
});
