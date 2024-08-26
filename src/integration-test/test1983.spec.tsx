
import { test, expect } from "@playwright/experimental-ct-react";
import App1983 from "../example/App1983.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1983 />);
  await expect(component).toContainText("Learn React");
});
