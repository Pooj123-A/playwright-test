
import { test, expect } from "@playwright/experimental-ct-react";
import App1544 from "../example/App1544.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1544 />);
  await expect(component).toContainText("Learn React");
});
